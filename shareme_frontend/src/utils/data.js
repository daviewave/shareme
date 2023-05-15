export const userQuery = (userId) => {
  return `*[_type == "user" && _id == '${userId}']`;
};

export const searchQuery = (searchTerm) => {
  return `*[_type == "pin" && title match "${searchTerm}*" || category match "${searchTerm}*" || about match "${searchTerm}*"]{
      image {
        asset -> {
          url
        }
      },
      _id,
      destination,
      postBy -> {
        _id,
        username,
        image
      },
      save[] {
        _key,
        postedBy -> {
          _id,
          username,
          image
        },
      },
  }`;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc){
  image {
    asset -> {
      url
    }
  },
  _id,
  destination,
  postBy -> {
    _id,
    username,
    image
  },
  save[] {
    _key,
    postedBy -> {
      _id,
      username,
      image
    },
  },
}`;
