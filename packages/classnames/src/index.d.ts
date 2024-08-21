type Item = string | Record<string, boolean>;

export type Params = Item | Item[];

type Output = Params | null;

export type Return = Output[] | (Output[] & { [K in keyof Return]?: Return });

export default function classnames(...args: Params[]): string;
