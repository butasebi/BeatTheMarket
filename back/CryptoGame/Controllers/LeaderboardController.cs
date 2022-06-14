using Microsoft.AspNetCore.Mvc;

namespace CryptoGame.Controllers
{
    public class LeaderboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
