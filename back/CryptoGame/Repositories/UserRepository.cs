using CryptoGame.Entities;
using CryptoGame.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    
    public class UserRepository : IUserRepository
    {
        private readonly ProjectContext context;

        public UserRepository(ProjectContext context)
        {
            this.context = context;
        }

        public UserModel getUser(string email)
        {
            return context.Users
                .Where(x => x.Email == email)
                .Select(x => new UserModel(x.Id, x.UserName))
                .FirstOrDefault();
        }
    }
}
