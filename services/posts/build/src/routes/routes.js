"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setupRoutes = app => {
  // create new listing
  app.post('/listing', async (req, res, next) => {
    try {
      let {
        title,
        image
      } = req.body;

      if (!title) {
        throw new Error('A title and image is required.');
      }

      if (!title && !image) {
        throw new Error('A title and image is required.');
      }

      let imageUrl, imagePublicId;

      if (image) {
        const {
          createReadStream
        } = await image;
        const stream = createReadStream();
        const uploadImage = await uploadToCloudinary(stream, 'listing');
        if (!uploadImage.secure_url) throw new Error('Something went wrong while uploading image to Cloudinary');
        imageUrl = uploadImage.secure_url;
        imagePublicId = uploadImage.public_id;
      }

      const newListing = await new Listing({
        title: req.body.title,
        image: imageUrl,
        author: req.user.id
      }).save();
      await User.findOneAndUpdate({
        _id: newListing.author
      }, {
        $push: {
          listings: newListing.id
        }
      });
      return res.json(newListing);
    } catch (e) {
      return next(e);
    }
  }); // get listings from followed users
  // app.get('/listing', async (req, res, next) => {
  //   try {
  //     // find user ids, that current user follows
  //     const userFollowing = []
  //     const follow = await Follow.find({ follower: userId }, { _id: 0 }).select('user')
  //     follow.map(f => userFollowing.push(f.user))
  //     // find user listings and followed listings by using userFollowing ids array
  //     const query = { $or: [{ author: { $in: userFollowing } }, { author: userId }], }
  //     const followedListingsCount = await Listing.find(query).countDocuments()
  //     const followedListings = await Listing.find(query)
  //       .populate({ path: 'author', populate: [{ path: 'following' }, { path: 'followers' }, { path: 'notifications', populate: [{ path: 'author' }, { path: 'follow' }, { path: 'like' }, { path: 'comment' }] }] })
  //       .populate('likes')
  //       .populate({ path: 'comments', options: { sort: { createdAt: 'desc' } }, populate: { path: 'author' }, })
  //       .skip(skip)
  //       .limit(limit)
  //       .sort({ createdAt: 'desc' })
  //     return res.json({ listings: followedListings, count: followedListingsCount })
  //   } catch (e) {
  //     return next(e)
  //   }
  // })
  // get all listings

  app.get('/listings', async (req, res, next) => {
    try {
      const listings = await Listing.find();
      return res.json(listings); // const query = { $and: [{ image: { $ne: null } }, { author: { $ne: authUserId } }] }
      // const listingsCount = await Listing.find(query).countDocuments()
      // const allListings = await Listing.find(query)
      //   .populate({ path: 'author', populate: [{ path: 'following' }, { path: 'followers' }, { path: 'notifications', populate: [{ path: 'author' }, { path: 'follow' }, { path: 'like' }, { path: 'comment' }] }] })
      //   .populate('likes')
      //   .populate({ path: 'comments', options: { sort: { createdAt: 'desc' } }, populate: { path: 'author' }, })
      //   .skip(skip)
      //   .limit(limit)
      //   .sort({ createdAt: 'desc' })
      // return { listings: allListings, count: listingsCount }
    } catch (e) {
      return next(e);
    }
  }); // get listing by id
  // app.get('/listing/:id', async (req, res, next) => {
  //   try {
  //     const listing = await Listing.findById(req.params.id)
  //     // .populate({ path: 'author', populate: [{ path: 'following' }, { path: 'followers' }, { path: 'notifications', populate: [{ path: 'author' }, { path: 'follow' }, { path: 'like' }, { path: 'comment' }] }] })
  //     // .populate('likes')
  //     // .populate({ path: 'comments', options: { sort: { createdAt: -1 } }, populate: { path: 'author' } })
  //     return res.json(listing)
  //   } catch (e) {
  //     return next(e)
  //   }
  // })
  // delete listing from cloudinary and db
  // app.delete('/listing/:id', async (req, res, next) => {
  //   try {
  //     let imagePublicId = req.params.imagePublicId
  //     let id = req.params.id
  //     // remove listing image from cloudinary, if imagePublicId is present
  //     if (imagePublicId) {
  //       const deleteImage = await deleteFromCloudinary(imagePublicId)
  //       if (deleteImage.result !== 'ok') {
  //         throw new Error(
  //           'Something went wrong while deleting image from Cloudinary'
  //         )
  //       }
  //     }
  //     // Find listing and remove it
  //     const listing = await Listing.findByIdAndRemove(id)
  //     // Delete listing from authors (users) listings collection
  //     await User.findOneAndUpdate(
  //       { _id: listing.author },
  //       { $pull: { listings: listing.id } }
  //     )
  //     // Delete listing likes from likes collection
  //     await Like.find({ listing: listing.id }).deleteMany()
  //     // Delete listing likes from users collection
  //     listing.likes.map(async likeId => {
  //       await User.where({ likes: likeId }).update({ $pull: { likes: likeId } })
  //     })
  //     // Delete listing comments from comments collection
  //     await Comment.find({ listing: listing.id }).deleteMany()
  //     // Delete comments from users collection
  //     listing.comments.map(async commentId => {
  //       await User.where({ comments: commentId }).update({
  //         $pull: { comments: commentId },
  //       })
  //     })
  //     // Find user notification in users collection and remove them
  //     const userNotifications = await Notification.find({ listing: listing.id })
  //     userNotifications.map(async notification => {
  //       await User.where({ notifications: notification.id }).update({
  //         $pull: { notifications: notification.id },
  //       })
  //     })
  //     // Remove notifications from notifications collection
  //     await Notification.find({ listing: listing.id }).deleteMany()
  //     return res.json(listing)
  //   } catch (e) {
  //     return next(e)
  //   }
  // })
};

var _default = setupRoutes;
exports.default = _default;