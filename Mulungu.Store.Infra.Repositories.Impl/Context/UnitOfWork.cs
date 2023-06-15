using Microsoft.EntityFrameworkCore;
using Mulungu.Loja.Domain.Contracts;
using Mulungu.Loja.Infra.Repositories.Impl.Repositories;

namespace Mulungu.Loja.Infra.Repositories.Impl.Context;

public class UnitOfWork : IUnitOfWork
{
    private IUnitOfWork _unitOfWork;
    private IProductRepository _productRepository;
    private StoreDbContext _dbContext;
    
    public UnitOfWork(StoreDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public void SaveChanges()
    {
        /*using (var db = new StoreDbContext())
        {
            db.SaveChanges();
        }*/
        _dbContext.SaveChanges();
    }
}

/*private readonly DbContext _dbContext;

  public UnitOfWork(DbContext dbContext)
  {
      _dbContext = dbContext;
  }*/
// Testar remover readonly e instanciar diferentemente
    

/*public IProductRepository ProductRepository => 
    _productRepository ?? (_productRepository = new ProductRepository(_dbContext));*/