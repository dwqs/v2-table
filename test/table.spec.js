import Vue from 'vue';

import { destroyVM, createVM } from './utils';

const DELAY = 10;
const testDataArr = [];
const getTestData = function () {
    return [
        { id: 1, name: 'test1', songs: 100, age: 30 },
        { id: 2, name: 'test2', songs: 90, age: 40 },
        { id: 3, name: 'test3', songs: 110, age: 20 },
        { id: 4, name: 'test4', songs: 80, age: 60 },
        { id: 5, name: 'test5', songs: 70, age: 10 }
    ];
};

const toArray = function (obj) {
    return [].slice.call(obj);
};

const getLabels = function (vm, selector) {
    return toArray(vm.$el.querySelectorAll(selector)).map(node => node.innerText.trim()).filter(o => o);
};

getTestData().forEach(cur => {
    Object.keys(cur).forEach(prop => {
        testDataArr.push(cur[prop].toString());
    });
});

describe('v2-table', () => {
    describe('rendering data is correct', () => {
        const vm = createVM({
            template: `
            <v2-table :data="testData">
                <v2-table-column prop="id" label="ID"/>
                <v2-table-column prop="name" label="Name" />
                <v2-table-column prop="songs" label="Songs" />
                <v2-table-column prop="age" label="Age" />
            </v2-table>
            `,

            created () {
                this.testData = getTestData();
            }
        });

        it('row length', () => {
            expect(vm.$el.querySelectorAll('.v2-table__body-wrapper .v2-table__row')).to.have.lengthOf(getTestData().length);
        });

        it('head', done => {
            setTimeout(() => {
                expect(getLabels(vm, '.v2-table__header-wrapper .v2-table__column-cell'))
                    .to.eql(['ID', 'Name', 'Songs', 'Age']);
                done();
            }, DELAY);
        });

        it('row data', () => {
            const cells = toArray(vm.$el.querySelectorAll('.v2-table__body-wrapper .v2-table__cell'))
                .map(node => node.innerText.trim());
            
            expect(cells).to.eql(testDataArr);
            destroyVM(vm);
        });
    });

    describe('table attributes', () => {
        const createTable = function (props, opts) {
            return createVM(Object.assign({
                template: `
                <v2-table :data="testData" ${props}>
                    <v2-table-column prop="id" label="ID"/>
                    <v2-table-column prop="name" label="Name" />
                    <v2-table-column prop="songs" label="Songs" />
                    <v2-table-column prop="age" label="Age" />
                </v2-table>
                `,
        
                created () {
                    this.testData = getTestData();
                }
            }, opts));
        };

        it('height', done => {
            const vm = createTable('height="125"');
            setTimeout(() => {
                expect(vm.$el.querySelector('.v2-table__body-wrapper').style.height).to.equal('125px');
                destroyVM(vm);
                done();
            }, DELAY);
        });

        it('cell-height', done => {
            const vm = createTable('cell-height="50"');
            setTimeout(() => {
                expect(vm.$el.querySelector('.v2-table__body-wrapper .v2-table__cell').style.height).to.equal('50px');
                destroyVM(vm);
                done();
            }, DELAY);
        }, DELAY);

        it('row-class-name', done => {
            const vm = createTable('row-class-name="test-class-name"');
            setTimeout(() => {
                const rows = toArray(vm.$el.querySelectorAll('.v2-table__body .v2-table__row'));
                expect(rows.filter(row => row.classList.contains('test-class-name'))).to.have.lengthOf(getTestData().length);
                destroyVM(vm);
                done();
            }, DELAY);
        }, DELAY);

        it('stripe', done => {
            const vm = createTable('stripe');
            setTimeout(() => {
                expect(vm.$el.classList.contains('v2-table__striped')).to.true;
                destroyVM(vm);
                done();
            }, DELAY);
        });

        it('border', done => {
            const vm = createTable('border');
            setTimeout(() => {
                const el = vm.$el.querySelector('.v2-table__body');
                expect(el.classList.contains('v2-table__border')).to.true;
                destroyVM(vm);
                done();
            }, DELAY);
        });
    });

    describe('column attributes', () => {
        const createTable = function (props1, props2, props3, props4, opts, tableProps) {
            return createVM(Object.assign({
                template: `
                <v2-table :data="testData" ${tableProps || ''}>
                    <v2-table-column prop="id" ${props1 || ''}/>
                    <v2-table-column prop="name" ${props2 || ''} />
                    <v2-table-column prop="songs" ${props3 || ''} />
                    <v2-table-column prop="age" ${props4 || ''} />
                </v2-table>
                `,
        
                created () {
                    this.testData = getTestData();
                }
            }, opts));
        };

        it('label', done => {
            const vm = createTable('label="attr1"', 'label="attr2"', 'label="attr3"');
            setTimeout(() => {
                expect(getLabels(vm, '.v2-table__header-wrapper .v2-table__column-cell'))
                    .to.eql(['attr1', 'attr2', 'attr3']);
                destroyVM(vm);
                done();
            }, DELAY);
        });

        it('fixed column', done => {
            const vm = createTable('label="test1"', 'fixed="left" label="test2"', 'fixed="right" label="test3"');
            setTimeout(() => {
                expect(getLabels(vm, '.v2-table__fixed-left .v2-table__column-cell')).to.eql(['test2']);
                expect(getLabels(vm, '.v2-table__fixed-right .v2-table__column-cell')).to.eql(['test3']);
                destroyVM(vm);
                done();
            }, DELAY);
        });
        
        it('align', done => {
            const vm = createTable('align="left"', 'align="right"');
            const len = getTestData().length + 1;
            setTimeout(() => {
                expect(toArray(vm.$el.querySelectorAll('.text-left'))).to.have.lengthOf(len);
                expect(vm.$el.querySelectorAll('.text-right')).to.have.lengthOf(len);
                destroyVM(vm);
                done();
            }, DELAY);
        });
    });
});

