export default {
    functional: true,

    props: ['column', 'row'],

    render (createElement, context) {
        const { props } = context;
        const { row, column } = props;

        const data = {
            class: {
                'v2-table__cell': true,
                'v2-table__row-cell': true
            },
            style: {
                textAlign: ['left', 'center', 'right'].indexOf(column.align) > -1 ? column.align : 'center'
            }
        };

        if (column.$scopedSlots.default) {
            return createElement('div', data, column.$scopedSlots.default(row));
        }

        data.domProps = {};
        data.domProps.innerHTML = row[column.prop] ? row[column.prop] : '';

        return createElement('div', data);
    }
};
