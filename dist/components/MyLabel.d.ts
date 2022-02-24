/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * What is the text of the label
    */
    label: string;
    /**
    * Default Size of the label
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * label text in All Caps when true
    */
    allCaps?: boolean;
    /**
    * Basic colors of text of the label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom color of the font
     */
    fontColor?: string;
    /**
     * Custom Background color of the font
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size }: MyLabelProps) => JSX.Element;
