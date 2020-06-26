const test = require('ava')
const houbbPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => houbbPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(houbbPages('w'), 'w@zce.me')
  t.is(houbbPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
