﻿using FunkoPopBlog.Models;
using System.Collections.Generic;

namespace FunkoPopBlog.Repositories
{
    public interface IUserProfileFunkoPopRepository
    {
        void AddFavorite(UserProfileFunkoPop userProfileFunkoPop);
        void DeleteFavorite(int id, int userProfileId);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        List<FunkoPop> GetMyCollection(int userProfileId);
    }
}