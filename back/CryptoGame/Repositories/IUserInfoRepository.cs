using CryptoGame.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public interface IUserInfoRepository
    {
        IQueryable<UserInfo> GetUserInfoIQueriable();

        void Create(UserInfo emp);

        void Update(UserInfo emp);


    }
}