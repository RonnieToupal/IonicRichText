import { ElementRef, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { TextInput } from 'ionic-angular';
export interface RichTextOptions {
    undo?: boolean;
    redo?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    largeText?: boolean;
    smallText?: boolean;
    alignLeft?: boolean;
    alignCenter?: boolean;
    alignRight?: boolean;
    justify?: boolean;
    lineJump?: boolean;
    orderedList?: boolean;
    unorderedList?: boolean;
    strikethrough?: boolean;
    canClose?: boolean;
}
export declare class RichTextComponent implements OnInit {
    constructor();
    editor: TextInput;
    decorate: ElementRef;
    styler: ElementRef;
    formControlItem: FormControl;
    options: RichTextOptions;
    placeholderText: string;
    canClose: boolean;
    ngOnInit(): void;
    uniqueId: string;
    showDecorator: boolean;
    private updateItem();
    private wireupButtons();
    ngAfterContentInit(): void;
    toggleDecorator(): void;
}
