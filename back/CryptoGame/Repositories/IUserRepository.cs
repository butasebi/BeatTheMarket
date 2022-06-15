using CryptoGame.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public interface IUserRepository
    {
        UserModel getUser(string email);
    }
}
