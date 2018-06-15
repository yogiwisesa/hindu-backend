'use strict'

const Schema = use('Schema')

class KidungSchema extends Schema {
  up () {
    this.create('kidungs', (table) => {
      table.increments()
      table.string('nama_kidung')
      table.text('kidung')
      table.string('sound_url')
      table.string('submitted_by')
      table.text('status')
      table.string
      table.timestamps()
    })
  }

  down () {
    this.drop('kidungs')
  }
}

module.exports = KidungSchema
