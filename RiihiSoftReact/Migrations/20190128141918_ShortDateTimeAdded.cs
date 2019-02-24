using Microsoft.EntityFrameworkCore.Migrations;

namespace RiihiSoftReact.Migrations
{
    public partial class ShortDateTimeAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TimeGiven",
                table: "Feedbacks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeGiven",
                table: "Feedbacks");
        }
    }
}
