using CryptoGame.Entities;
using CryptoGame.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public class LeaderboardManager : ILeaderboardManager
    {
        private readonly ILeaderboardRepository LeaderboardRepo;
        public LeaderboardManager(ILeaderboardRepository repo)
        {
            this.LeaderboardRepo = repo;
        }

        public async Task AddRecord(Leaderboard leaderboard)
        {
            await LeaderboardRepo.AddRecord(leaderboard);
        }
        public List<Leaderboard> GetLeaderboard()
        {
            return LeaderboardRepo.GetLeaderboard().ToList();
        }
        public List<Leaderboard> GetLeaderboard(string currency)
        {
            return LeaderboardRepo.GetLeaderboard(currency).ToList();
        }

        public List<Leaderboard> GetLeaderboardById(string Id)
        {
            return LeaderboardRepo.GetLeaderboardById(Id).ToList();
        }

        public async Task Delete(Leaderboard leaderboard)
        {
            LeaderboardRepo.Delete(leaderboard);
        }
    }
}
