//% color="#00FF00" weight=10 icon="\uf121"
namespace textprocess {
    //% block="encode $str"
    //% inlineInputMode=inline
    export function encode(str: string): Buffer {
        return Buffer.createBufferFromUint8(new TextEncoder().encode(str))
    }

    //% block="decode $buf"
    //% inlineInputMode=inline
    export function decode(buf: Buffer): string {
        return new TextDecoder().decode(buf.toUint8());
    }
}