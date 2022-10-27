// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import education from './education';
import experience from './experience';
import pageInfo from './pageinfo';
import project from './project';
import resume from './resume';
import skill from './skill';
import social from './social';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    skill,
    pageInfo,
    experience,
    social,
    project,
    resume,
    education
  ]),
})
