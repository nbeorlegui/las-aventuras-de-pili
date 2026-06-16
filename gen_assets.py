from PIL import Image, ImageDraw
from pathlib import Path
import math, wave, struct, subprocess, os, random
root=Path('/mnt/data/pili_audio_work')
# icons
logo=Image.open(root/'public/assets/logo-mobile.webp').convert('RGBA')
icon_dir=root/'public/icons'; icon_dir.mkdir(exist_ok=True, parents=True)
for size in [72,96,128,144,152,180,192,384,512]:
    bg=Image.new('RGBA',(size,size),(0,0,0,0))
    draw=ImageDraw.Draw(bg)
    # rounded background
    draw.rounded_rectangle([0,0,size,size], radius=int(size*.22), fill=(72,165,255,255))
    draw.rounded_rectangle([int(size*.04),int(size*.04),int(size*.96),int(size*.96)], radius=int(size*.18), outline=(255,255,255,220), width=max(2,size//32))
    # paste logo scaled
    pad=int(size*.08)
    scale=min((size-2*pad)/logo.width,(size-2*pad)/logo.height)
    lg=logo.resize((int(logo.width*scale), int(logo.height*scale)), Image.LANCZOS)
    x=(size-lg.width)//2; y=(size-lg.height)//2
    bg.alpha_composite(lg,(x,y))
    name='apple-touch-icon.png' if size==180 else f'icon-{size}.png'
    bg.convert('RGBA').save(icon_dir/name)
# favicon ico
Image.open(icon_dir/'icon-192.png').save(icon_dir/'favicon.ico', sizes=[(32,32),(48,48)])

# audio helpers
sr=22050
def env(t,d):
    a=0.03; r=0.08
    if t<a: return t/a
    if t>d-r: return max(0,(d-t)/r)
    return 1

def make_tone_seq(path, notes, bpm=120, wave_type='sine', vol=0.22, pad=0.02):
    data=[]
    for freq, beats in notes:
        dur=60/bpm*beats
        n=int(sr*dur)
        for i in range(n):
            t=i/sr
            if freq<=0:
                val=0
            else:
                # soft glockenspiel with harmonics
                val=math.sin(2*math.pi*freq*t)*0.75 + math.sin(2*math.pi*freq*2.01*t)*0.18 + math.sin(2*math.pi*freq*3.02*t)*0.07
                val*=env(t,dur)
            data.append(max(-1,min(1,val*vol)))
        data += [0]*int(sr*pad)
    wav=Path(path).with_suffix('.wav')
    with wave.open(str(wav),'w') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr)
        w.writeframes(b''.join(struct.pack('<h', int(x*32767)) for x in data))
    mp3=Path(path)
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(wav),'-codec:a','libmp3lame','-b:a','96k',str(mp3)], check=True)
    wav.unlink(missing_ok=True)

def loop_music(path, root_freqs, bpm=95, bars=16, vol=0.10):
    # arpeggiated soft music ~30s
    notes=[]
    for b in range(bars):
        chord=root_freqs[b%len(root_freqs)]
        pattern=[chord, chord*1.25, chord*1.5, chord*2.0, chord*1.5, chord*1.25, chord*1.12, chord*1.5]
        for f in pattern:
            notes.append((f,0.5))
    make_tone_seq(path, notes, bpm=bpm, vol=vol, pad=0)

A4=440
def n(semi): return A4*(2**(semi/12))
audio=root/'public/audio'; audio.mkdir(exist_ok=True, parents=True)
make_tone_seq(audio/'correct.mp3', [(n(7),.25),(n(12),.35)], bpm=120, vol=.30)
make_tone_seq(audio/'wrong.mp3', [(n(-5),.28),(n(-8),.35)], bpm=100, vol=.22)
make_tone_seq(audio/'hint.mp3', [(n(0),.15),(n(4),.15),(n(7),.25)], bpm=110, vol=.22)
make_tone_seq(audio/'star.mp3', [(n(12),.12),(n(16),.12),(n(19),.28)], bpm=140, vol=.28)
make_tone_seq(audio/'level-complete.mp3', [(n(0),.2),(n(4),.2),(n(7),.2),(n(12),.45),(n(7),.18),(n(12),.55)], bpm=120, vol=.26)
make_tone_seq(audio/'unlock.mp3', [(n(2),.18),(n(9),.18),(n(14),.32)], bpm=120, vol=.24)
loop_music(audio/'menu.mp3', [n(-12), n(-10), n(-5), n(-7)], bpm=88, bars=20, vol=.09)
loop_music(audio/'english-1.mp3', [n(-10), n(-3), n(-5), n(0)], bpm=96, bars=20, vol=.085)
loop_music(audio/'english-2.mp3', [n(-7), n(-2), n(-4), n(1)], bpm=92, bars=20, vol=.08)
loop_music(audio/'english-3.mp3', [n(-5), n(0), n(-8), n(-1)], bpm=100, bars=20, vol=.075)
print('assets ok')
