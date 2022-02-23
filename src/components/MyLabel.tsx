import './myLabel.css'

export interface MyLabelProps {
    /**
    * What is the text of the label
    */
    label: string;
    /**
    * Default Size of the label
    */
    size?: 'normal' | 'h1'| 'h2'| 'h3';
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
}

export const MyLabel = ( { 
    allCaps = false,
    color   = 'primary',
    fontColor = '#5517ac',
    label   = 'No Label',
    size    = 'normal'
 }: MyLabelProps) => {
    return (
        <span 
              className={`label ${size} text-${color}`}
              style={{ color: fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
