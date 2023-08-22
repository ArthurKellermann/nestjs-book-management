import { randomUUID } from 'crypto';

export interface BookProps {
  title: string;
  description: string;
  bar_code: string;
}

export class Book {
  private _id: string;
  private props: BookProps;

  constructor(props: BookProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public get id() {
    return this._id;
  }
  public get title(): string {
    return this.props.title;
  }
  public set title(title: string) {
    this.props.title = title;
  }

  public get description(): string {
    return this.props.description;
  }
  public set description(description: string) {
    this.props.description = description;
  }

  public get bar_code(): string {
    return this.props.bar_code;
  }
  public set bar_code(bar_code: string) {
    this.props.bar_code = bar_code;
  }
}
