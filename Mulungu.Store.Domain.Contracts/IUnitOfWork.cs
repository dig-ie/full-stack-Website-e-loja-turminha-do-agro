namespace Mulungu.Loja.Domain.Contracts;

public interface IUnitOfWork
{
    //IProductRepository ProductRepository { get; }
    void SaveChanges();
}