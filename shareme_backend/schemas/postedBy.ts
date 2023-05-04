export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'document',
    fields: [
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{ type: 'user' }]
        },
    ],
}
