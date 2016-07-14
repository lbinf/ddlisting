import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('submit-loading-img', 'Integration | Component | submit loading img', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{submit-loading-img}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#submit-loading-img}}
      template block text
    {{/submit-loading-img}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});