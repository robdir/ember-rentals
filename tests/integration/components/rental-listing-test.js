import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop'

let rental = EmberObject.create({
  image: 'fake.png',
  title: 'test-title',
  owner: 'test-owner',
  category: 'test-type',
  city: 'test-city',
  bedrooms: 3
})

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('it should display rental details', function(assert) {
  this.set('rentalObj', rental);
  this.render(hbs`{{rental-listing rental=rentalObj}}`);
});

test('should toggle wide class on click', function(assert) {
  this.set('rentalObj', rental);
  this.render(hbs`{{rental-listing rental=rentalObj}}`);
})
