using CryptoGame.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public class LeaderboardRepository : ILeaderboardRepository
    {
        private readonly ProjectContext db;

        public LeaderboardRepository(ProjectContext ProjectContext)
        {
            this.db = ProjectContext;
        }

        public async Task AddRecord(Leaderboard leaderboard)
        {
            await db.Leaderboard.AddAsync(leaderboard);

            await db.SaveChangesAsync();
        }

        public IQueryable<Leaderboard> GetLeaderboard()
        {
            var leaderboard = db.Leaderboard;

            return leaderboard;
        }

        public IQueryable<Leaderboard> GetLeaderboard(string currency)
        {
            var leaderboard = from Leaderboard in db.Leaderboard
                              where Leaderboard.Currency == currency
                              select Leaderboard;

            return leaderboard;
        }

        public IQueryable<Leaderboard> GetLeaderboardById(string Id)
        {
            var leaderboard = from Leaderboard in db.Leaderboard
                              where Leaderboard.Id == Id
                              select Leaderboard;

            return leaderboard;
        }

        public async Task Delete(Leaderboard leaderboard)
        {
            db.Leaderboard.Remove(leaderboard);

            await db.SaveChangesAsync();
        }

    }
}
