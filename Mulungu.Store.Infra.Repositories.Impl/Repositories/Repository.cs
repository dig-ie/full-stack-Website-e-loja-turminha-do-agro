using Mulungu.Loja.Domain.Contracts;
using Mulungu.Loja.Domain.Entities;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Mulungu.Loja.Infra.Repositories.Impl.Context;

namespace Mulungu.Loja.Infra.Repositories.Impl.Repositories;

public abstract class Repository<T> : IRepository<T> where T : BaseEntity
{
    private readonly DbSet<T> _dbSet;
    private readonly DbContext _dbContext;

    protected Repository(StoreDbContext dbContext)
    {
        _dbSet = dbContext.Set<T>();
    }

    public T? FindById(Guid Id)
    {
        return _dbSet.FirstOrDefault(e => e.Id == Id);
    }

    public IList<T> FindBy(Expression<Func<T, bool>> predicate)
    {
        return _dbSet.Where(predicate).ToList();
    }

    public IList<T> FindAll()
    {
        return _dbSet.ToList();
    }

    public void Save(T prod)
    {
        _dbSet.Add(prod);
        
    }

    public void Update(T prod)
    {
        _dbSet.Attach(prod);
        _dbContext.Entry(prod).State = EntityState.Modified;
    }

    public void Delete(Guid Id)
    {
        var entity = _dbSet.FirstOrDefault(e => e.Id == Id);
        if (entity != null)
        {
            _dbSet.Attach(entity).State = EntityState.Deleted;
        }
    }
}