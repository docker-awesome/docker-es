export default class Loading {
    static start(options?: {
        title?: string;
        mask?: boolean;
    }): void;
    static end(): void;
    static reset(): void;
}
