import CheckBox from './checkbox.vue';

export default {
    functional: true,

    props: ['column', 'row', 'rowIndex', 'height'],

    render (createElement, context) {
        const { props } = context;
        const { row, column, rowIndex, height } = props;

        const data = {
            class: {
                'v2-table__cell': true,
                'text-left': column.align === 'left',
                'text-right': column.align === 'right'
            },
            style: {
                'height': height + 'px'
            }
        };
        
        if (column.type === 'selection') {
            const box = createElement(CheckBox, {
                props: {
                    curRowIndex: rowIndex,
                    curRow: row
                }
            });

            return createElement('td', data, [createElement('div', {
                class: {
                    'cell': true
                }
            }, [box])]);
        }

        if (column.$scopedSlots.default) {
            return createElement('td', data, [createElement('div', {
                class: {
                    'cell': true
                }
            }, column.$scopedSlots.default({
                row: row
            }))]);
        }

        return createElement('td', data, [createElement('div', {
            class: {
                'cell': true
            },
            domProps: {
                innerHTML: typeof row[column.prop] !== 'undefined' ? row[column.prop] : ''
            }
        })]);
    }
};
