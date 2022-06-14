using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Entities
{
    public class User : IdentityUser
    {
        public string FirstName;

        public string LastName;

        public ICollection<UserRole> UserRoles { get; set; }
        
    }
}
