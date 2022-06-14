using CryptoGame.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public interface ILeaderboardManager
    {

        Task AddRecord(Leaderboard leaderboard);

        Task Delete(Leaderboard leaderboard);

        List<Leaderboard> GetLeaderboard(string currency);

        List<Leaderboard> GetLeaderboardById(string Id);
    }
}
