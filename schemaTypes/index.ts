import about from '../schemas/documents/about'
import home from '../schemas/documents/home'
import project from '../schemas/documents/project'
import registration from '../schemas/documents/registration'
import descriptionWithIcons from '../schemas/objects/descriptionWithIcons'
import doubleBlock from '../schemas/objects/doubleBlock'
import flexItemsWithDescription from '../schemas/objects/flexItemsWithDescription'
import flexTextItems from '../schemas/objects/flexTextItems'
import fullWidthContent from '../schemas/objects/fullWidthContent'
import longImage from '../schemas/objects/longImage'
import pageHeading from '../schemas/objects/pageHeading'
import richText from '../schemas/objects/richText'
import textItem from '../schemas/objects/textItem'
import titleAndDescription from '../schemas/objects/titleAndDescription'

const documents = [home, project, about, registration]

const objects = [
  titleAndDescription,
  doubleBlock,
  pageHeading,
  longImage,
  flexItemsWithDescription,
  fullWidthContent,
  textItem,
  flexTextItems,
  descriptionWithIcons,
  richText,
]

export const schemaTypes = [...documents, ...objects]
