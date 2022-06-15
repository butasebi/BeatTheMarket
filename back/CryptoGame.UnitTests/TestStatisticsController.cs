using CryptoGame.Controllers;
using CryptoGame.Managers;
using CryptoGame.Repositories;
using Microsoft.AspNetCore.Mvc;
using Shouldly;
using System;
using System.Threading.Tasks;
using Xunit;

namespace CryptoGame.UnitTests
{
    public class TestStatisticsController
    {
        [Fact]
        public async Task TestStockMinute()
        {
            // Arrange
            IStatisticsRepository repository = new StatisticsRepository();
            IStatisticsManager manager = new StatisticsManager(repository);
            StatisticsController controller = new StatisticsController(manager);

            // Act
            var result = (OkObjectResult)await controller.GetStatistics("stock", "TSLA", "minute", DateTime.Parse("2020-01-01"), DateTime.Parse("2023-01-01"));

            // Assert
            result.StatusCode.ShouldBe(200);
        }

        [Fact]
        public async Task TestStockDay()
        {
            // Arrange
            IStatisticsRepository repository = new StatisticsRepository();
            IStatisticsManager manager = new StatisticsManager(repository);
            StatisticsController controller = new StatisticsController(manager);

            // Act
            var result = (OkObjectResult)await controller.GetStatistics("stock", "TSLA", "day", DateTime.Parse("2020-01-01"), DateTime.Parse("2023-01-01"));

            // Assert
            result.StatusCode.ShouldBe(200);
        }

        [Fact]
        public async Task TestStockWeek()
        {
            // Arrange
            IStatisticsRepository repository = new StatisticsRepository();
            IStatisticsManager manager = new StatisticsManager(repository);
            StatisticsController controller = new StatisticsController(manager);

            // Act
            var result = (OkObjectResult)await controller.GetStatistics("stock", "TSLA", "week", DateTime.Parse("2010-01-01"), DateTime.Parse("2023-01-01"));

            // Assert
            result.StatusCode.ShouldBe(200);
        }

        [Fact]
        public async Task TestCryptoMinute()
        {
            // Arrange
            IStatisticsRepository repository = new StatisticsRepository();
            IStatisticsManager manager = new StatisticsManager(repository);
            StatisticsController controller = new StatisticsController(manager);

            // Act
            var result = (OkObjectResult)await controller.GetStatistics("crypto", "BTC", "minute", DateTime.Parse("2020-01-01"), DateTime.Parse("2023-01-01"));

            // Assert
            result.StatusCode.ShouldBe(200);
        }

        [Fact]
        public async Task TestCryptoDay()
        {
            // Arrange
            IStatisticsRepository repository = new StatisticsRepository();
            IStatisticsManager manager = new StatisticsManager(repository);
            StatisticsController controller = new StatisticsController(manager);

            // Act
            var result = (OkObjectResult)await controller.GetStatistics("crypto", "BTC", "day", DateTime.Parse("2020-01-01"), DateTime.Parse("2023-01-01"));

            // Assert
            result.StatusCode.ShouldBe(200);
        }
    }
}
