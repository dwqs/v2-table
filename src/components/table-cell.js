export default {
    functional: true,

    props: ['column', 'row'],

    render (createElement, context) {
        const data = {};
        const { props } = context;
        const { row, column } = props;

        if (column.$scopedSlots.default) {
            return createElement('td', data, column.$scopedSlots.default(row));
        }

        data.domProps = {};
        data.domProps.innerHTML = row[column.prop] ? row[column.prop] : '';

        return createElement('td', data);
    }
};
