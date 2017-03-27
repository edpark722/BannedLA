using BannedLA.Domain;
using BannedLA.Models.Requests;
using Sabio.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BannedLA.Services
{
    public class UserProfileService:BaseService
    {
        public void CreateUserProfile(string userId, CreateUserRequest model)
        {
            //Updated the create user so that it can take in the tokenHash param if there is one provided --Anna

            DataProvider.ExecuteNonQuery(GetConnection, "dbo.UserProfiles_Insert"
                , inputParamMapper: delegate (SqlParameterCollection paramCollection)
                {
                    paramCollection.AddWithValue("@Id", model.Id);
                    paramCollection.AddWithValue("@UserId", userId);
                    paramCollection.AddWithValue("@FirstName", model.FirstName);
                    paramCollection.AddWithValue("@LastName", model.LastName);

                }
                );

        }

        public UserProfile GetUserById(string UserId)
        {
            UserProfile c = null;
            DataProvider.ExecuteCmd(GetConnection, "dbo.AdminUser_SelectByUserId"
              , inputParamMapper: delegate (SqlParameterCollection paramCollection)
              {
                  paramCollection.AddWithValue("@UserId", UserId);
              }, map: delegate (IDataReader reader, short set)
              {
                  c = new UserProfile();
                  int startingIndex = 0;
                  c.Id = reader.GetSafeInt32(startingIndex++);
                  c.UserId = reader.GetSafeString(startingIndex++);
                  c.FirstName = reader.GetSafeString(startingIndex++);
                  c.LastName = reader.GetSafeString(startingIndex++);
                  c.Email = reader.GetSafeString(startingIndex++);
                  c.Phone = reader.GetSafeString(startingIndex++);
                  c.DateAdded = reader.GetSafeDateTime(startingIndex++);
                  c.DateModified = reader.GetSafeDateTime(startingIndex++);



                  //c.Role.RoleId = reader.GetSafeString(startingIndex++);
                  //c.Role.Name = reader.GetSafeString(startingIndex++);


              }

           );
            return c;
        }


    }
}