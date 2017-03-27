using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BannedLA.Domain
{
    public class UserProfile
    {
        //Delete this top one if its duplicated
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string UserId { get; set; }

        public DateTime DateAdded { get; set; }

        public DateTime DateModified { get; set; }
    }
}

