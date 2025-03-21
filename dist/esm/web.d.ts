import { WebPlugin } from '@capacitor/core';
import type { FFMpegPlugin } from './definitions';
export declare class FFMpegWeb extends WebPlugin implements FFMpegPlugin {
    runCmd(_: {
        args: string;
    }): Promise<{
        execution_id: number;
    }>;
}
