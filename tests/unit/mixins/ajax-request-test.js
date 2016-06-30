import Ember from 'ember';
import AjaxRequestMixin from 'ember-ajax/mixins/ajax-request';
import { describe, it } from 'mocha';
import { assert } from 'chai';

const { Object: EmberObject } = Ember;
const { ok } = assert;

describe('Unit | Mixin | ajax request', function() {
  it('works', function() {
    let AjaxRequestObject = EmberObject.extend(AjaxRequestMixin);
    let subject = AjaxRequestObject.create();
    ok(subject);
  });
});
