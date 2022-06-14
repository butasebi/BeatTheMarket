using CryptoGame.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public interface ILeaderboardRepository
    {
        Task AddRecord(Leaderboard leaderboard);

        Task Delete(Leaderboard leaderboard);

        IQueryable<Leaderboard> GetLeaderboard(string currency);

        IQueryable<Leaderboard> GetLeaderboardById(string Id);
    }
}
