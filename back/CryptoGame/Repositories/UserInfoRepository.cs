using CryptoGame.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public class UserInfoRepository : IUserInfoRepository
    {
        private readonly ProjectContext db;

        public UserInfoRepository(ProjectContext db)
        {
            this.db = db;
        }

        public void Create(UserInfo ui)
        {
            db.UsersInfo.Add(ui);
            db.SaveChanges();
        }

        public void Update(UserInfo ui)
        {
            db.UsersInfo.Update(ui);
            db.SaveChanges();
        }
       

        public IQueryable<UserInfo> GetUserInfoIQueriable()
        {
            var ui = db.UsersInfo;

            return ui;
        }

    }
}