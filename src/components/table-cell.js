import CheckBox from './checkbox.vue';

export default {
    functional: true,

    props: ['column', 'row', 'rowIndex'],

    render (createElement, context) {
        const { props } = context;
        const { row, column, rowIndex } = props;

        const data = {
            class: {
                'v2-table__cell': true,
                'v2-table__row-cell': true,
                'text-left': column.align === 'left',
                'text-right': column.align === 'right'
            }
            // style: {
            //     textAlign: ['left', 'center', 'right'].indexOf(column.align) > -1 ? column.align : 'center'
            // }
        };

        if (column.type === 'selection') {
            return createElement('div', data, [createElement(CheckBox, {
                props: {
                    selectIndex: rowIndex
                }
            })]);
        }

        if (column.$scopedSlots.default) {
            return createElement('div', data, column.$scopedSlots.default(row));
        }

        data.domProps = {};
        data.domProps.innerHTML = row[column.prop] ? row[column.prop] : '';

        return createElement('div', data);
    }
};
