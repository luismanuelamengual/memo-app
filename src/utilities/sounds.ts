// @ts-ignore
const soundFiles = new Map<string, Audio>();

export function playSound(fileName: string) {
  try {
    let soundFile = soundFiles.get(fileName);
    if (!soundFile) {
      soundFile = new Audio(fileName);
      soundFiles.set(fileName, soundFile);
    }
    soundFile.play();
  } catch (e) {}
}