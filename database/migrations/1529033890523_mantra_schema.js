'use strict'

const Schema = use('Schema')

class MantraSchema extends Schema {
  up () {
    this.create('mantras', (table) => {
      table.increments()
      table.string('nama_mantra')
      table.text('mantra')   
      table.text('translated_mantra')
      table.string('sound_url')
      table.string('submitted_by')
      table.text('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('mantras')
  }
}

module.exports = MantraSchema
