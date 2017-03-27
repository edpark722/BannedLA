using BannedLA.Domain;
using BannedLA.Models;
using BannedLA.Models.Requests;
using BannedLA.Services;
using Sabio.Web.Models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BannedLA.Controllers.Api
{
    [RoutePrefix("api/public")]
    public class PublicApiController : ApiController
    {
        [Route("add"), HttpPost]
        public HttpResponseMessage RegisterNewUser(CreateUserRequest model)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            //new stored proc/service to check for email/phone... if email/phone number taken, return bad request.
            //also checks for a null websiteId via slug

            //bool checkUser = _UserProfileService.GetUserByEmailAndPhoneNumber(model);

            //if (checkUser == true && checkWebsite == null)
            //{
            //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);

            //}

            ApplicationUser newUser = null;
            try
            {
                newUser = (ApplicationUser)UserService.CreateUser(model.Email, model.Password, model.Phone);

            }
            catch (Exception ex)
            {
                //Uncomment when function works
                //string validatedData = UtilityService.ValidateData(ex);

                //return Request.CreateErrorResponse(HttpStatusCode.BadRequest, validatedData, ex);
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);

            }
            //log in User Info into database
            //only get to this part if there are no duplicate email/phone... 
            //NOTHING SHOULD GET INTO THE DATABASE IF THERE IS A 400 ERROR

            UserProfileService UPS = new UserProfileService();
            if (newUser != null)
            {
                UPS.CreateUserProfile(newUser.Id, model);
            }

            ItemResponse<UserProfile> response = new ItemResponse<UserProfile>();

            response.Item = (UserProfile)UPS.GetUserById(newUser.Id);

            return Request.CreateResponse(response);

        }

    }
}
