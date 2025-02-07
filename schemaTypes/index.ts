import about from '../schemas/documents/about'
import home from '../schemas/documents/home'
import project from '../schemas/documents/project'
import registration from '../schemas/documents/registration'
import user from '../schemas/documents/user'
import layout from '../schemas/documents/layout'

import doubleBlock from '../schemas/objects/doubleBlock'
import descriptionWithIcons from '../schemas/objects/descriptionWithIcons'
import flexItemsWithDescription from '../schemas/objects/flexItemsWithDescription'
import flexTextItems from '../schemas/objects/flexTextItems'
import fullWidthContent from '../schemas/objects/fullWidthContent'
import iconLink from '../schemas/objects/iconLink'
import longImage from '../schemas/objects/longImage'
import pageHeading from '../schemas/objects/pageHeading'
import richText from '../schemas/objects/richText'
import textItem from '../schemas/objects/textItem'
import titleAndDescription from '../schemas/objects/titleAndDescription'
import footer from '../schemas/objects/footer'

const documents = [home, project, about, registration, user, layout]

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
  iconLink,
  footer,
]

export const schemaTypes = [...documents, ...objects]
