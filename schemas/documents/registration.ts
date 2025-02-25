import {defineField, defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'registration',
  title: 'Registrations',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      readOnly: true,
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{type: 'project'}],
      readOnly: true,
    }),
    defineField({
      name: 'approveRegistration',
      title: 'Approve registration',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'registrationId',
      title: 'Registration ID',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'user'}],
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      media: 'project.mainImage',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: selection.media,
      }
    },
  },
})
