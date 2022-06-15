using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Models
{
    public class UserModel
    {
        public UserModel(string id, string userName)
        {
            this.UserId = id;
            this.UserName = userName;
        }

        public string UserId { get; set; }
        public string UserName { get; set; }
    }
}
