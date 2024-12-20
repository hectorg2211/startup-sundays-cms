import home from '../schemas/documents/home'
import project from '../schemas/documents/project'
import doubleBlock from '../schemas/objects/doubleBlock'
import titleAndDescription from '../schemas/objects/titleAndDescription'

const documents = [home, project]

const objects = [titleAndDescription, doubleBlock]

export const schemaTypes = [...documents, ...objects]
