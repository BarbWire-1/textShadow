import document from 'document';
export const startFactory = Date.now()
console.log(`startFactory: ${Date.now()}`)
    export const constructWidgets = (widgetType, construct) => {
        const widgets = document.getElementsByTypeName(widgetType);
        widgets.forEach(widget => {
            const classes = widget.class.split(' ');  // array of all class names
            if (widget.id !== widget.type && classes.indexOf('widget-auto') >= 0) { // .id!==.type selects <use> and rejects <symbol> in SDK4 on watch
                widget.class = widget.class;    // bring forward (ie, trigger) application of CSS styles
                construct(widget);
            }
        });
}
console.log("end factory: "+ (Date.now() - startFactory))