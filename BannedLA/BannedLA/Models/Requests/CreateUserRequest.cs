using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BannedLA.Models.Requests
{
    public class CreateUserRequest
    {
        public int Id { get; set; } = 0;

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

    }
}