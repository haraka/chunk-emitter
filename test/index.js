
const assert   = require('assert')

// npm modules

beforeEach(function () {
    this.ce = require('../index')
})

describe('chunk-emitter', function () {
    it('loads', function () {
        assert.ok(this.ce)
    })
})
